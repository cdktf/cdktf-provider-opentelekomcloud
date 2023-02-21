# `dataOpentelekomcloudCsbsBackupPolicyV1` Submodule <a name="`dataOpentelekomcloudCsbsBackupPolicyV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudCsbsBackupPolicyV1 <a name="DataOpentelekomcloudCsbsBackupPolicyV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_policy_v1 opentelekomcloud_csbs_backup_policy_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer"></a>

```typescript
import { dataOpentelekomcloudCsbsBackupPolicyV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1(scope: Construct, id: string, config?: DataOpentelekomcloudCsbsBackupPolicyV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config">DataOpentelekomcloudCsbsBackupPolicyV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config">DataOpentelekomcloudCsbsBackupPolicyV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.resetStatus"></a>

```typescript
public resetStatus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.isConstruct"></a>

```typescript
import { dataOpentelekomcloudCsbsBackupPolicyV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudCsbsBackupPolicyV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudCsbsBackupPolicyV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.common">common</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.providerId">providerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.resource">resource</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList">DataOpentelekomcloudCsbsBackupPolicyV1ResourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.scheduledOperation">scheduledOperation</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList">DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.status">status</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `common`<sup>Required</sup> <a name="common" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.common"></a>

```typescript
public readonly common: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.providerId"></a>

```typescript
public readonly providerId: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.resource"></a>

```typescript
public readonly resource: DataOpentelekomcloudCsbsBackupPolicyV1ResourceList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList">DataOpentelekomcloudCsbsBackupPolicyV1ResourceList</a>

---

##### `scheduledOperation`<sup>Required</sup> <a name="scheduledOperation" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.scheduledOperation"></a>

```typescript
public readonly scheduledOperation: DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList">DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudCsbsBackupPolicyV1Config <a name="DataOpentelekomcloudCsbsBackupPolicyV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudCsbsBackupPolicyV1 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudCsbsBackupPolicyV1Config: dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_policy_v1#id DataOpentelekomcloudCsbsBackupPolicyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_policy_v1#name DataOpentelekomcloudCsbsBackupPolicyV1#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_policy_v1#region DataOpentelekomcloudCsbsBackupPolicyV1#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_policy_v1#status DataOpentelekomcloudCsbsBackupPolicyV1#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_policy_v1#id DataOpentelekomcloudCsbsBackupPolicyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_policy_v1#name DataOpentelekomcloudCsbsBackupPolicyV1#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_policy_v1#region DataOpentelekomcloudCsbsBackupPolicyV1#region}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Config.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/csbs_backup_policy_v1#status DataOpentelekomcloudCsbsBackupPolicyV1#status}.

---

### DataOpentelekomcloudCsbsBackupPolicyV1Resource <a name="DataOpentelekomcloudCsbsBackupPolicyV1Resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Resource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Resource.Initializer"></a>

```typescript
import { dataOpentelekomcloudCsbsBackupPolicyV1 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudCsbsBackupPolicyV1Resource: dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Resource = { ... }
```


### DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperation <a name="DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperation" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperation.Initializer"></a>

```typescript
import { dataOpentelekomcloudCsbsBackupPolicyV1 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperation: dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperation = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudCsbsBackupPolicyV1ResourceList <a name="DataOpentelekomcloudCsbsBackupPolicyV1ResourceList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.Initializer"></a>

```typescript
import { dataOpentelekomcloudCsbsBackupPolicyV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference <a name="DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudCsbsBackupPolicyV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Resource">DataOpentelekomcloudCsbsBackupPolicyV1Resource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ResourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudCsbsBackupPolicyV1Resource;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1Resource">DataOpentelekomcloudCsbsBackupPolicyV1Resource</a>

---


### DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList <a name="DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.Initializer"></a>

```typescript
import { dataOpentelekomcloudCsbsBackupPolicyV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.get"></a>

```typescript
public get(index: number): DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference <a name="DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer"></a>

```typescript
import { dataOpentelekomcloudCsbsBackupPolicyV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.maxBackups">maxBackups</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.operationType">operationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.permanent">permanent</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.retentionDurationDays">retentionDurationDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerId">triggerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerName">triggerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerPattern">triggerPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerType">triggerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperation">DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxBackups`<sup>Required</sup> <a name="maxBackups" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.maxBackups"></a>

```typescript
public readonly maxBackups: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `operationType`<sup>Required</sup> <a name="operationType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.operationType"></a>

```typescript
public readonly operationType: string;
```

- *Type:* string

---

##### `permanent`<sup>Required</sup> <a name="permanent" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.permanent"></a>

```typescript
public readonly permanent: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `retentionDurationDays`<sup>Required</sup> <a name="retentionDurationDays" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.retentionDurationDays"></a>

```typescript
public readonly retentionDurationDays: number;
```

- *Type:* number

---

##### `triggerId`<sup>Required</sup> <a name="triggerId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerId"></a>

```typescript
public readonly triggerId: string;
```

- *Type:* string

---

##### `triggerName`<sup>Required</sup> <a name="triggerName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerName"></a>

```typescript
public readonly triggerName: string;
```

- *Type:* string

---

##### `triggerPattern`<sup>Required</sup> <a name="triggerPattern" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerPattern"></a>

```typescript
public readonly triggerPattern: string;
```

- *Type:* string

---

##### `triggerType`<sup>Required</sup> <a name="triggerType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.triggerType"></a>

```typescript
public readonly triggerType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperation;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudCsbsBackupPolicyV1.DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperation">DataOpentelekomcloudCsbsBackupPolicyV1ScheduledOperation</a>

---



