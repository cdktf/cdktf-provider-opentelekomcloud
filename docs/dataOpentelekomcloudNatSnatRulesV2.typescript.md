# `dataOpentelekomcloudNatSnatRulesV2` Submodule <a name="`dataOpentelekomcloudNatSnatRulesV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudNatSnatRulesV2 <a name="DataOpentelekomcloudNatSnatRulesV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/data-sources/nat_snat_rules_v2 opentelekomcloud_nat_snat_rules_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer"></a>

```typescript
import { dataOpentelekomcloudNatSnatRulesV2 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2(scope: Construct, id: string, config?: DataOpentelekomcloudNatSnatRulesV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config">DataOpentelekomcloudNatSnatRulesV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config">DataOpentelekomcloudNatSnatRulesV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetCidr">resetCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetFloatingIpAddress">resetFloatingIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetFloatingIpId">resetFloatingIpId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetGatewayId">resetGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetRuleId">resetRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetSourceType">resetSourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetCidr` <a name="resetCidr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetCidr"></a>

```typescript
public resetCidr(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFloatingIpAddress` <a name="resetFloatingIpAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetFloatingIpAddress"></a>

```typescript
public resetFloatingIpAddress(): void
```

##### `resetFloatingIpId` <a name="resetFloatingIpId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetFloatingIpId"></a>

```typescript
public resetFloatingIpId(): void
```

##### `resetGatewayId` <a name="resetGatewayId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetGatewayId"></a>

```typescript
public resetGatewayId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetRuleId` <a name="resetRuleId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetRuleId"></a>

```typescript
public resetRuleId(): void
```

##### `resetSourceType` <a name="resetSourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetSourceType"></a>

```typescript
public resetSourceType(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudNatSnatRulesV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isConstruct"></a>

```typescript
import { dataOpentelekomcloudNatSnatRulesV2 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudNatSnatRulesV2 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudNatSnatRulesV2 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudNatSnatRulesV2 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudNatSnatRulesV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudNatSnatRulesV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudNatSnatRulesV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/data-sources/nat_snat_rules_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudNatSnatRulesV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList">DataOpentelekomcloudNatSnatRulesV2RulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.cidrInput">cidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.floatingIpAddressInput">floatingIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.floatingIpIdInput">floatingIpIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.gatewayIdInput">gatewayIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.ruleIdInput">ruleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.sourceTypeInput">sourceTypeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.floatingIpAddress">floatingIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.floatingIpId">floatingIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.ruleId">ruleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.sourceType">sourceType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.rules"></a>

```typescript
public readonly rules: DataOpentelekomcloudNatSnatRulesV2RulesList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList">DataOpentelekomcloudNatSnatRulesV2RulesList</a>

---

##### `cidrInput`<sup>Optional</sup> <a name="cidrInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.cidrInput"></a>

```typescript
public readonly cidrInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `floatingIpAddressInput`<sup>Optional</sup> <a name="floatingIpAddressInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.floatingIpAddressInput"></a>

```typescript
public readonly floatingIpAddressInput: string;
```

- *Type:* string

---

##### `floatingIpIdInput`<sup>Optional</sup> <a name="floatingIpIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.floatingIpIdInput"></a>

```typescript
public readonly floatingIpIdInput: string;
```

- *Type:* string

---

##### `gatewayIdInput`<sup>Optional</sup> <a name="gatewayIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.gatewayIdInput"></a>

```typescript
public readonly gatewayIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `ruleIdInput`<sup>Optional</sup> <a name="ruleIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.ruleIdInput"></a>

```typescript
public readonly ruleIdInput: string;
```

- *Type:* string

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.sourceTypeInput"></a>

```typescript
public readonly sourceTypeInput: number;
```

- *Type:* number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `floatingIpAddress`<sup>Required</sup> <a name="floatingIpAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.floatingIpAddress"></a>

```typescript
public readonly floatingIpAddress: string;
```

- *Type:* string

---

##### `floatingIpId`<sup>Required</sup> <a name="floatingIpId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.floatingIpId"></a>

```typescript
public readonly floatingIpId: string;
```

- *Type:* string

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `ruleId`<sup>Required</sup> <a name="ruleId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.sourceType"></a>

```typescript
public readonly sourceType: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudNatSnatRulesV2Config <a name="DataOpentelekomcloudNatSnatRulesV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudNatSnatRulesV2 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudNatSnatRulesV2Config: dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.cidr">cidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/data-sources/nat_snat_rules_v2#cidr DataOpentelekomcloudNatSnatRulesV2#cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/data-sources/nat_snat_rules_v2#description DataOpentelekomcloudNatSnatRulesV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.floatingIpAddress">floatingIpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/data-sources/nat_snat_rules_v2#floating_ip_address DataOpentelekomcloudNatSnatRulesV2#floating_ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.floatingIpId">floatingIpId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/data-sources/nat_snat_rules_v2#floating_ip_id DataOpentelekomcloudNatSnatRulesV2#floating_ip_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.gatewayId">gatewayId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/data-sources/nat_snat_rules_v2#gateway_id DataOpentelekomcloudNatSnatRulesV2#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/data-sources/nat_snat_rules_v2#id DataOpentelekomcloudNatSnatRulesV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.projectId">projectId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/data-sources/nat_snat_rules_v2#project_id DataOpentelekomcloudNatSnatRulesV2#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.ruleId">ruleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/data-sources/nat_snat_rules_v2#rule_id DataOpentelekomcloudNatSnatRulesV2#rule_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.sourceType">sourceType</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/data-sources/nat_snat_rules_v2#source_type DataOpentelekomcloudNatSnatRulesV2#source_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/data-sources/nat_snat_rules_v2#status DataOpentelekomcloudNatSnatRulesV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/data-sources/nat_snat_rules_v2#subnet_id DataOpentelekomcloudNatSnatRulesV2#subnet_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cidr`<sup>Optional</sup> <a name="cidr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/data-sources/nat_snat_rules_v2#cidr DataOpentelekomcloudNatSnatRulesV2#cidr}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/data-sources/nat_snat_rules_v2#description DataOpentelekomcloudNatSnatRulesV2#description}.

---

##### `floatingIpAddress`<sup>Optional</sup> <a name="floatingIpAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.floatingIpAddress"></a>

```typescript
public readonly floatingIpAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/data-sources/nat_snat_rules_v2#floating_ip_address DataOpentelekomcloudNatSnatRulesV2#floating_ip_address}.

---

##### `floatingIpId`<sup>Optional</sup> <a name="floatingIpId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.floatingIpId"></a>

```typescript
public readonly floatingIpId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/data-sources/nat_snat_rules_v2#floating_ip_id DataOpentelekomcloudNatSnatRulesV2#floating_ip_id}.

---

##### `gatewayId`<sup>Optional</sup> <a name="gatewayId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/data-sources/nat_snat_rules_v2#gateway_id DataOpentelekomcloudNatSnatRulesV2#gateway_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/data-sources/nat_snat_rules_v2#id DataOpentelekomcloudNatSnatRulesV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/data-sources/nat_snat_rules_v2#project_id DataOpentelekomcloudNatSnatRulesV2#project_id}.

---

##### `ruleId`<sup>Optional</sup> <a name="ruleId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.ruleId"></a>

```typescript
public readonly ruleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/data-sources/nat_snat_rules_v2#rule_id DataOpentelekomcloudNatSnatRulesV2#rule_id}.

---

##### `sourceType`<sup>Optional</sup> <a name="sourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.sourceType"></a>

```typescript
public readonly sourceType: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/data-sources/nat_snat_rules_v2#source_type DataOpentelekomcloudNatSnatRulesV2#source_type}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/data-sources/nat_snat_rules_v2#status DataOpentelekomcloudNatSnatRulesV2#status}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.40/docs/data-sources/nat_snat_rules_v2#subnet_id DataOpentelekomcloudNatSnatRulesV2#subnet_id}.

---

### DataOpentelekomcloudNatSnatRulesV2Rules <a name="DataOpentelekomcloudNatSnatRulesV2Rules" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Rules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Rules.Initializer"></a>

```typescript
import { dataOpentelekomcloudNatSnatRulesV2 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudNatSnatRulesV2Rules: dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Rules = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudNatSnatRulesV2RulesList <a name="DataOpentelekomcloudNatSnatRulesV2RulesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.Initializer"></a>

```typescript
import { dataOpentelekomcloudNatSnatRulesV2 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudNatSnatRulesV2RulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudNatSnatRulesV2RulesOutputReference <a name="DataOpentelekomcloudNatSnatRulesV2RulesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudNatSnatRulesV2 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.adminStateUp">adminStateUp</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.floatingIpAddress">floatingIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.floatingIpId">floatingIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.sourceType">sourceType</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Rules">DataOpentelekomcloudNatSnatRulesV2Rules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `adminStateUp`<sup>Required</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `floatingIpAddress`<sup>Required</sup> <a name="floatingIpAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.floatingIpAddress"></a>

```typescript
public readonly floatingIpAddress: string;
```

- *Type:* string

---

##### `floatingIpId`<sup>Required</sup> <a name="floatingIpId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.floatingIpId"></a>

```typescript
public readonly floatingIpId: string;
```

- *Type:* string

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudNatSnatRulesV2Rules;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Rules">DataOpentelekomcloudNatSnatRulesV2Rules</a>

---



