# `dataOpentelekomcloudHssHostsV5` Submodule <a name="`dataOpentelekomcloudHssHostsV5` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudHssHostsV5 <a name="DataOpentelekomcloudHssHostsV5" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5 opentelekomcloud_hss_hosts_v5}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.Initializer"></a>

```typescript
import { dataOpentelekomcloudHssHostsV5 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5(scope: Construct, id: string, config?: DataOpentelekomcloudHssHostsV5Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config">DataOpentelekomcloudHssHostsV5Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config">DataOpentelekomcloudHssHostsV5Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetAgentStatus">resetAgentStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetAssetValue">resetAssetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetDetectResult">resetDetectResult</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetGroupId">resetGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetHostId">resetHostId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetOsType">resetOsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetPolicyGroupId">resetPolicyGroupId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetProtectChargingMode">resetProtectChargingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetProtectStatus">resetProtectStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetProtectVersion">resetProtectVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAgentStatus` <a name="resetAgentStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetAgentStatus"></a>

```typescript
public resetAgentStatus(): void
```

##### `resetAssetValue` <a name="resetAssetValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetAssetValue"></a>

```typescript
public resetAssetValue(): void
```

##### `resetDetectResult` <a name="resetDetectResult" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetDetectResult"></a>

```typescript
public resetDetectResult(): void
```

##### `resetGroupId` <a name="resetGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetGroupId"></a>

```typescript
public resetGroupId(): void
```

##### `resetHostId` <a name="resetHostId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetHostId"></a>

```typescript
public resetHostId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetName"></a>

```typescript
public resetName(): void
```

##### `resetOsType` <a name="resetOsType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetOsType"></a>

```typescript
public resetOsType(): void
```

##### `resetPolicyGroupId` <a name="resetPolicyGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetPolicyGroupId"></a>

```typescript
public resetPolicyGroupId(): void
```

##### `resetProtectChargingMode` <a name="resetProtectChargingMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetProtectChargingMode"></a>

```typescript
public resetProtectChargingMode(): void
```

##### `resetProtectStatus` <a name="resetProtectStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetProtectStatus"></a>

```typescript
public resetProtectStatus(): void
```

##### `resetProtectVersion` <a name="resetProtectVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetProtectVersion"></a>

```typescript
public resetProtectVersion(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudHssHostsV5 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.isConstruct"></a>

```typescript
import { dataOpentelekomcloudHssHostsV5 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudHssHostsV5 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudHssHostsV5 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.generateConfigForImport"></a>

```typescript
import { dataOpentelekomcloudHssHostsV5 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpentelekomcloudHssHostsV5 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpentelekomcloudHssHostsV5 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpentelekomcloudHssHostsV5 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudHssHostsV5 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.hosts">hosts</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList">DataOpentelekomcloudHssHostsV5HostsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.agentStatusInput">agentStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.assetValueInput">assetValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.detectResultInput">detectResultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.groupIdInput">groupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.hostIdInput">hostIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.osTypeInput">osTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.policyGroupIdInput">policyGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.protectChargingModeInput">protectChargingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.protectStatusInput">protectStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.protectVersionInput">protectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.agentStatus">agentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.assetValue">assetValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.detectResult">detectResult</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.hostId">hostId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.osType">osType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.policyGroupId">policyGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.protectChargingMode">protectChargingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.protectStatus">protectStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.protectVersion">protectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.hosts"></a>

```typescript
public readonly hosts: DataOpentelekomcloudHssHostsV5HostsList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList">DataOpentelekomcloudHssHostsV5HostsList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `agentStatusInput`<sup>Optional</sup> <a name="agentStatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.agentStatusInput"></a>

```typescript
public readonly agentStatusInput: string;
```

- *Type:* string

---

##### `assetValueInput`<sup>Optional</sup> <a name="assetValueInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.assetValueInput"></a>

```typescript
public readonly assetValueInput: string;
```

- *Type:* string

---

##### `detectResultInput`<sup>Optional</sup> <a name="detectResultInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.detectResultInput"></a>

```typescript
public readonly detectResultInput: string;
```

- *Type:* string

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.groupIdInput"></a>

```typescript
public readonly groupIdInput: string;
```

- *Type:* string

---

##### `hostIdInput`<sup>Optional</sup> <a name="hostIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.hostIdInput"></a>

```typescript
public readonly hostIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `osTypeInput`<sup>Optional</sup> <a name="osTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.osTypeInput"></a>

```typescript
public readonly osTypeInput: string;
```

- *Type:* string

---

##### `policyGroupIdInput`<sup>Optional</sup> <a name="policyGroupIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.policyGroupIdInput"></a>

```typescript
public readonly policyGroupIdInput: string;
```

- *Type:* string

---

##### `protectChargingModeInput`<sup>Optional</sup> <a name="protectChargingModeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.protectChargingModeInput"></a>

```typescript
public readonly protectChargingModeInput: string;
```

- *Type:* string

---

##### `protectStatusInput`<sup>Optional</sup> <a name="protectStatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.protectStatusInput"></a>

```typescript
public readonly protectStatusInput: string;
```

- *Type:* string

---

##### `protectVersionInput`<sup>Optional</sup> <a name="protectVersionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.protectVersionInput"></a>

```typescript
public readonly protectVersionInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `agentStatus`<sup>Required</sup> <a name="agentStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.agentStatus"></a>

```typescript
public readonly agentStatus: string;
```

- *Type:* string

---

##### `assetValue`<sup>Required</sup> <a name="assetValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.assetValue"></a>

```typescript
public readonly assetValue: string;
```

- *Type:* string

---

##### `detectResult`<sup>Required</sup> <a name="detectResult" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.detectResult"></a>

```typescript
public readonly detectResult: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `hostId`<sup>Required</sup> <a name="hostId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

---

##### `policyGroupId`<sup>Required</sup> <a name="policyGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.policyGroupId"></a>

```typescript
public readonly policyGroupId: string;
```

- *Type:* string

---

##### `protectChargingMode`<sup>Required</sup> <a name="protectChargingMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.protectChargingMode"></a>

```typescript
public readonly protectChargingMode: string;
```

- *Type:* string

---

##### `protectStatus`<sup>Required</sup> <a name="protectStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.protectStatus"></a>

```typescript
public readonly protectStatus: string;
```

- *Type:* string

---

##### `protectVersion`<sup>Required</sup> <a name="protectVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.protectVersion"></a>

```typescript
public readonly protectVersion: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudHssHostsV5Config <a name="DataOpentelekomcloudHssHostsV5Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudHssHostsV5 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudHssHostsV5Config: dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.agentStatus">agentStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5#agent_status DataOpentelekomcloudHssHostsV5#agent_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.assetValue">assetValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5#asset_value DataOpentelekomcloudHssHostsV5#asset_value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.detectResult">detectResult</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5#detect_result DataOpentelekomcloudHssHostsV5#detect_result}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.groupId">groupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5#group_id DataOpentelekomcloudHssHostsV5#group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.hostId">hostId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5#host_id DataOpentelekomcloudHssHostsV5#host_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5#id DataOpentelekomcloudHssHostsV5#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5#name DataOpentelekomcloudHssHostsV5#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.osType">osType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5#os_type DataOpentelekomcloudHssHostsV5#os_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.policyGroupId">policyGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5#policy_group_id DataOpentelekomcloudHssHostsV5#policy_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.protectChargingMode">protectChargingMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5#protect_charging_mode DataOpentelekomcloudHssHostsV5#protect_charging_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.protectStatus">protectStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5#protect_status DataOpentelekomcloudHssHostsV5#protect_status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.protectVersion">protectVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5#protect_version DataOpentelekomcloudHssHostsV5#protect_version}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5#status DataOpentelekomcloudHssHostsV5#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `agentStatus`<sup>Optional</sup> <a name="agentStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.agentStatus"></a>

```typescript
public readonly agentStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5#agent_status DataOpentelekomcloudHssHostsV5#agent_status}.

---

##### `assetValue`<sup>Optional</sup> <a name="assetValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.assetValue"></a>

```typescript
public readonly assetValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5#asset_value DataOpentelekomcloudHssHostsV5#asset_value}.

---

##### `detectResult`<sup>Optional</sup> <a name="detectResult" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.detectResult"></a>

```typescript
public readonly detectResult: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5#detect_result DataOpentelekomcloudHssHostsV5#detect_result}.

---

##### `groupId`<sup>Optional</sup> <a name="groupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5#group_id DataOpentelekomcloudHssHostsV5#group_id}.

---

##### `hostId`<sup>Optional</sup> <a name="hostId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.hostId"></a>

```typescript
public readonly hostId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5#host_id DataOpentelekomcloudHssHostsV5#host_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5#id DataOpentelekomcloudHssHostsV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5#name DataOpentelekomcloudHssHostsV5#name}.

---

##### `osType`<sup>Optional</sup> <a name="osType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5#os_type DataOpentelekomcloudHssHostsV5#os_type}.

---

##### `policyGroupId`<sup>Optional</sup> <a name="policyGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.policyGroupId"></a>

```typescript
public readonly policyGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5#policy_group_id DataOpentelekomcloudHssHostsV5#policy_group_id}.

---

##### `protectChargingMode`<sup>Optional</sup> <a name="protectChargingMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.protectChargingMode"></a>

```typescript
public readonly protectChargingMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5#protect_charging_mode DataOpentelekomcloudHssHostsV5#protect_charging_mode}.

---

##### `protectStatus`<sup>Optional</sup> <a name="protectStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.protectStatus"></a>

```typescript
public readonly protectStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5#protect_status DataOpentelekomcloudHssHostsV5#protect_status}.

---

##### `protectVersion`<sup>Optional</sup> <a name="protectVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.protectVersion"></a>

```typescript
public readonly protectVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5#protect_version DataOpentelekomcloudHssHostsV5#protect_version}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Config.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/data-sources/hss_hosts_v5#status DataOpentelekomcloudHssHostsV5#status}.

---

### DataOpentelekomcloudHssHostsV5Hosts <a name="DataOpentelekomcloudHssHostsV5Hosts" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Hosts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Hosts.Initializer"></a>

```typescript
import { dataOpentelekomcloudHssHostsV5 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudHssHostsV5Hosts: dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Hosts = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudHssHostsV5HostsList <a name="DataOpentelekomcloudHssHostsV5HostsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.Initializer"></a>

```typescript
import { dataOpentelekomcloudHssHostsV5 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudHssHostsV5HostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudHssHostsV5HostsOutputReference <a name="DataOpentelekomcloudHssHostsV5HostsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudHssHostsV5 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.agentId">agentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.agentStatus">agentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.assetRiskNum">assetRiskNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.assetValue">assetValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.baselineRiskNum">baselineRiskNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.detectResult">detectResult</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.groupId">groupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.intrusionRiskNum">intrusionRiskNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.osType">osType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.policyGroupId">policyGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.privateIp">privateIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.protectChargingMode">protectChargingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.protectStatus">protectStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.protectVersion">protectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.publicIp">publicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.vulnerabilityRiskNum">vulnerabilityRiskNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Hosts">DataOpentelekomcloudHssHostsV5Hosts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentId`<sup>Required</sup> <a name="agentId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.agentId"></a>

```typescript
public readonly agentId: string;
```

- *Type:* string

---

##### `agentStatus`<sup>Required</sup> <a name="agentStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.agentStatus"></a>

```typescript
public readonly agentStatus: string;
```

- *Type:* string

---

##### `assetRiskNum`<sup>Required</sup> <a name="assetRiskNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.assetRiskNum"></a>

```typescript
public readonly assetRiskNum: number;
```

- *Type:* number

---

##### `assetValue`<sup>Required</sup> <a name="assetValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.assetValue"></a>

```typescript
public readonly assetValue: string;
```

- *Type:* string

---

##### `baselineRiskNum`<sup>Required</sup> <a name="baselineRiskNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.baselineRiskNum"></a>

```typescript
public readonly baselineRiskNum: number;
```

- *Type:* number

---

##### `detectResult`<sup>Required</sup> <a name="detectResult" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.detectResult"></a>

```typescript
public readonly detectResult: string;
```

- *Type:* string

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.groupId"></a>

```typescript
public readonly groupId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `intrusionRiskNum`<sup>Required</sup> <a name="intrusionRiskNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.intrusionRiskNum"></a>

```typescript
public readonly intrusionRiskNum: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `osType`<sup>Required</sup> <a name="osType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.osType"></a>

```typescript
public readonly osType: string;
```

- *Type:* string

---

##### `policyGroupId`<sup>Required</sup> <a name="policyGroupId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.policyGroupId"></a>

```typescript
public readonly policyGroupId: string;
```

- *Type:* string

---

##### `privateIp`<sup>Required</sup> <a name="privateIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.privateIp"></a>

```typescript
public readonly privateIp: string;
```

- *Type:* string

---

##### `protectChargingMode`<sup>Required</sup> <a name="protectChargingMode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.protectChargingMode"></a>

```typescript
public readonly protectChargingMode: string;
```

- *Type:* string

---

##### `protectStatus`<sup>Required</sup> <a name="protectStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.protectStatus"></a>

```typescript
public readonly protectStatus: string;
```

- *Type:* string

---

##### `protectVersion`<sup>Required</sup> <a name="protectVersion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.protectVersion"></a>

```typescript
public readonly protectVersion: string;
```

- *Type:* string

---

##### `publicIp`<sup>Required</sup> <a name="publicIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.publicIp"></a>

```typescript
public readonly publicIp: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `vulnerabilityRiskNum`<sup>Required</sup> <a name="vulnerabilityRiskNum" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.vulnerabilityRiskNum"></a>

```typescript
public readonly vulnerabilityRiskNum: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5HostsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudHssHostsV5Hosts;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudHssHostsV5.DataOpentelekomcloudHssHostsV5Hosts">DataOpentelekomcloudHssHostsV5Hosts</a>

---



