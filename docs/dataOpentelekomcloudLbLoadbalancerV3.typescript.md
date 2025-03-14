# `dataOpentelekomcloudLbLoadbalancerV3` Submodule <a name="`dataOpentelekomcloudLbLoadbalancerV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudLbLoadbalancerV3 <a name="DataOpentelekomcloudLbLoadbalancerV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/lb_loadbalancer_v3 opentelekomcloud_lb_loadbalancer_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer"></a>

```typescript
import { dataOpentelekomcloudLbLoadbalancerV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3(scope: Construct, id: string, config?: DataOpentelekomcloudLbLoadbalancerV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config">DataOpentelekomcloudLbLoadbalancerV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config">DataOpentelekomcloudLbLoadbalancerV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetL4Flavor">resetL4Flavor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetL7Flavor">resetL7Flavor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetRouterId">resetRouterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetVipAddress">resetVipAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetVipPortId">resetVipPortId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetL4Flavor` <a name="resetL4Flavor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetL4Flavor"></a>

```typescript
public resetL4Flavor(): void
```

##### `resetL7Flavor` <a name="resetL7Flavor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetL7Flavor"></a>

```typescript
public resetL7Flavor(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRouterId` <a name="resetRouterId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetRouterId"></a>

```typescript
public resetRouterId(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetVipAddress` <a name="resetVipAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetVipAddress"></a>

```typescript
public resetVipAddress(): void
```

##### `resetVipPortId` <a name="resetVipPortId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetVipPortId"></a>

```typescript
public resetVipPortId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudLbLoadbalancerV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.isConstruct"></a>

```typescript
import { dataOpentelekomcloudLbLoadbalancerV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudLbLoadbalancerV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudLbLoadbalancerV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudLbLoadbalancerV3 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudLbLoadbalancerV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudLbLoadbalancerV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudLbLoadbalancerV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/lb_loadbalancer_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudLbLoadbalancerV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.adminStateUp">adminStateUp</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.availabilityZones">availabilityZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.deletionProtection">deletionProtection</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.ipTargetEnable">ipTargetEnable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.networkIds">networkIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.publicIp">publicIp</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList">DataOpentelekomcloudLbLoadbalancerV3PublicIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.l4FlavorInput">l4FlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.l7FlavorInput">l7FlavorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.routerIdInput">routerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.vipAddressInput">vipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.vipPortIdInput">vipPortIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.l4Flavor">l4Flavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.l7Flavor">l7Flavor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.routerId">routerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.vipAddress">vipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.vipPortId">vipPortId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `adminStateUp`<sup>Required</sup> <a name="adminStateUp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `availabilityZones`<sup>Required</sup> <a name="availabilityZones" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.availabilityZones"></a>

```typescript
public readonly availabilityZones: string[];
```

- *Type:* string[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.deletionProtection"></a>

```typescript
public readonly deletionProtection: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ipTargetEnable`<sup>Required</sup> <a name="ipTargetEnable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.ipTargetEnable"></a>

```typescript
public readonly ipTargetEnable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `networkIds`<sup>Required</sup> <a name="networkIds" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.networkIds"></a>

```typescript
public readonly networkIds: string[];
```

- *Type:* string[]

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.publicIp"></a>

```typescript
public readonly publicIp: DataOpentelekomcloudLbLoadbalancerV3PublicIpList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList">DataOpentelekomcloudLbLoadbalancerV3PublicIpList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `l4FlavorInput`<sup>Optional</sup> <a name="l4FlavorInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.l4FlavorInput"></a>

```typescript
public readonly l4FlavorInput: string;
```

- *Type:* string

---

##### `l7FlavorInput`<sup>Optional</sup> <a name="l7FlavorInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.l7FlavorInput"></a>

```typescript
public readonly l7FlavorInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `routerIdInput`<sup>Optional</sup> <a name="routerIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.routerIdInput"></a>

```typescript
public readonly routerIdInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `vipAddressInput`<sup>Optional</sup> <a name="vipAddressInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.vipAddressInput"></a>

```typescript
public readonly vipAddressInput: string;
```

- *Type:* string

---

##### `vipPortIdInput`<sup>Optional</sup> <a name="vipPortIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.vipPortIdInput"></a>

```typescript
public readonly vipPortIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `l4Flavor`<sup>Required</sup> <a name="l4Flavor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.l4Flavor"></a>

```typescript
public readonly l4Flavor: string;
```

- *Type:* string

---

##### `l7Flavor`<sup>Required</sup> <a name="l7Flavor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.l7Flavor"></a>

```typescript
public readonly l7Flavor: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `routerId`<sup>Required</sup> <a name="routerId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.routerId"></a>

```typescript
public readonly routerId: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `vipAddress`<sup>Required</sup> <a name="vipAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.vipAddress"></a>

```typescript
public readonly vipAddress: string;
```

- *Type:* string

---

##### `vipPortId`<sup>Required</sup> <a name="vipPortId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.vipPortId"></a>

```typescript
public readonly vipPortId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudLbLoadbalancerV3Config <a name="DataOpentelekomcloudLbLoadbalancerV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudLbLoadbalancerV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudLbLoadbalancerV3Config: dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/lb_loadbalancer_v3#id DataOpentelekomcloudLbLoadbalancerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.l4Flavor">l4Flavor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/lb_loadbalancer_v3#l4_flavor DataOpentelekomcloudLbLoadbalancerV3#l4_flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.l7Flavor">l7Flavor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/lb_loadbalancer_v3#l7_flavor DataOpentelekomcloudLbLoadbalancerV3#l7_flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/lb_loadbalancer_v3#name DataOpentelekomcloudLbLoadbalancerV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.routerId">routerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/lb_loadbalancer_v3#router_id DataOpentelekomcloudLbLoadbalancerV3#router_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/lb_loadbalancer_v3#subnet_id DataOpentelekomcloudLbLoadbalancerV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.vipAddress">vipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/lb_loadbalancer_v3#vip_address DataOpentelekomcloudLbLoadbalancerV3#vip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.vipPortId">vipPortId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/lb_loadbalancer_v3#vip_port_id DataOpentelekomcloudLbLoadbalancerV3#vip_port_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/lb_loadbalancer_v3#id DataOpentelekomcloudLbLoadbalancerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `l4Flavor`<sup>Optional</sup> <a name="l4Flavor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.l4Flavor"></a>

```typescript
public readonly l4Flavor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/lb_loadbalancer_v3#l4_flavor DataOpentelekomcloudLbLoadbalancerV3#l4_flavor}.

---

##### `l7Flavor`<sup>Optional</sup> <a name="l7Flavor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.l7Flavor"></a>

```typescript
public readonly l7Flavor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/lb_loadbalancer_v3#l7_flavor DataOpentelekomcloudLbLoadbalancerV3#l7_flavor}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/lb_loadbalancer_v3#name DataOpentelekomcloudLbLoadbalancerV3#name}.

---

##### `routerId`<sup>Optional</sup> <a name="routerId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.routerId"></a>

```typescript
public readonly routerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/lb_loadbalancer_v3#router_id DataOpentelekomcloudLbLoadbalancerV3#router_id}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/lb_loadbalancer_v3#subnet_id DataOpentelekomcloudLbLoadbalancerV3#subnet_id}.

---

##### `vipAddress`<sup>Optional</sup> <a name="vipAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.vipAddress"></a>

```typescript
public readonly vipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/lb_loadbalancer_v3#vip_address DataOpentelekomcloudLbLoadbalancerV3#vip_address}.

---

##### `vipPortId`<sup>Optional</sup> <a name="vipPortId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.vipPortId"></a>

```typescript
public readonly vipPortId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/data-sources/lb_loadbalancer_v3#vip_port_id DataOpentelekomcloudLbLoadbalancerV3#vip_port_id}.

---

### DataOpentelekomcloudLbLoadbalancerV3PublicIp <a name="DataOpentelekomcloudLbLoadbalancerV3PublicIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIp.Initializer"></a>

```typescript
import { dataOpentelekomcloudLbLoadbalancerV3 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudLbLoadbalancerV3PublicIp: dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIp = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudLbLoadbalancerV3PublicIpList <a name="DataOpentelekomcloudLbLoadbalancerV3PublicIpList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.Initializer"></a>

```typescript
import { dataOpentelekomcloudLbLoadbalancerV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference <a name="DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudLbLoadbalancerV3 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.bandwidthChargeMode">bandwidthChargeMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.bandwidthName">bandwidthName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.bandwidthShareType">bandwidthShareType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.bandwidthSize">bandwidthSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.ipType">ipType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIp">DataOpentelekomcloudLbLoadbalancerV3PublicIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `bandwidthChargeMode`<sup>Required</sup> <a name="bandwidthChargeMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.bandwidthChargeMode"></a>

```typescript
public readonly bandwidthChargeMode: string;
```

- *Type:* string

---

##### `bandwidthName`<sup>Required</sup> <a name="bandwidthName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.bandwidthName"></a>

```typescript
public readonly bandwidthName: string;
```

- *Type:* string

---

##### `bandwidthShareType`<sup>Required</sup> <a name="bandwidthShareType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.bandwidthShareType"></a>

```typescript
public readonly bandwidthShareType: string;
```

- *Type:* string

---

##### `bandwidthSize`<sup>Required</sup> <a name="bandwidthSize" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.bandwidthSize"></a>

```typescript
public readonly bandwidthSize: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipType`<sup>Required</sup> <a name="ipType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.ipType"></a>

```typescript
public readonly ipType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudLbLoadbalancerV3PublicIp;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIp">DataOpentelekomcloudLbLoadbalancerV3PublicIp</a>

---



