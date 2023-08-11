# `data_opentelekomcloud_kms_data_key_v1`

Refer to the Terraform Registory for docs: [`data_opentelekomcloud_kms_data_key_v1`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/data-sources/kms_data_key_v1).

# `dataOpentelekomcloudKmsDataKeyV1` Submodule <a name="`dataOpentelekomcloudKmsDataKeyV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudKmsDataKeyV1 <a name="DataOpentelekomcloudKmsDataKeyV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/data-sources/kms_data_key_v1 opentelekomcloud_kms_data_key_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.Initializer"></a>

```typescript
import { dataOpentelekomcloudKmsDataKeyV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1(scope: Construct, id: string, config: DataOpentelekomcloudKmsDataKeyV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config">DataOpentelekomcloudKmsDataKeyV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config">DataOpentelekomcloudKmsDataKeyV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.resetEncryptionContext">resetEncryptionContext</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEncryptionContext` <a name="resetEncryptionContext" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.resetEncryptionContext"></a>

```typescript
public resetEncryptionContext(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.isConstruct"></a>

```typescript
import { dataOpentelekomcloudKmsDataKeyV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudKmsDataKeyV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudKmsDataKeyV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.cipherText">cipherText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.plainText">plainText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.datakeyLengthInput">datakeyLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.encryptionContextInput">encryptionContextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.datakeyLength">datakeyLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.encryptionContext">encryptionContext</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `cipherText`<sup>Required</sup> <a name="cipherText" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.cipherText"></a>

```typescript
public readonly cipherText: string;
```

- *Type:* string

---

##### `plainText`<sup>Required</sup> <a name="plainText" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.plainText"></a>

```typescript
public readonly plainText: string;
```

- *Type:* string

---

##### `datakeyLengthInput`<sup>Optional</sup> <a name="datakeyLengthInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.datakeyLengthInput"></a>

```typescript
public readonly datakeyLengthInput: string;
```

- *Type:* string

---

##### `encryptionContextInput`<sup>Optional</sup> <a name="encryptionContextInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.encryptionContextInput"></a>

```typescript
public readonly encryptionContextInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `datakeyLength`<sup>Required</sup> <a name="datakeyLength" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.datakeyLength"></a>

```typescript
public readonly datakeyLength: string;
```

- *Type:* string

---

##### `encryptionContext`<sup>Required</sup> <a name="encryptionContext" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.encryptionContext"></a>

```typescript
public readonly encryptionContext: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudKmsDataKeyV1Config <a name="DataOpentelekomcloudKmsDataKeyV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudKmsDataKeyV1 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudKmsDataKeyV1Config: dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.datakeyLength">datakeyLength</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/data-sources/kms_data_key_v1#datakey_length DataOpentelekomcloudKmsDataKeyV1#datakey_length}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.keyId">keyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/data-sources/kms_data_key_v1#key_id DataOpentelekomcloudKmsDataKeyV1#key_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.encryptionContext">encryptionContext</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/data-sources/kms_data_key_v1#encryption_context DataOpentelekomcloudKmsDataKeyV1#encryption_context}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/data-sources/kms_data_key_v1#id DataOpentelekomcloudKmsDataKeyV1#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `datakeyLength`<sup>Required</sup> <a name="datakeyLength" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.datakeyLength"></a>

```typescript
public readonly datakeyLength: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/data-sources/kms_data_key_v1#datakey_length DataOpentelekomcloudKmsDataKeyV1#datakey_length}.

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/data-sources/kms_data_key_v1#key_id DataOpentelekomcloudKmsDataKeyV1#key_id}.

---

##### `encryptionContext`<sup>Optional</sup> <a name="encryptionContext" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.encryptionContext"></a>

```typescript
public readonly encryptionContext: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/data-sources/kms_data_key_v1#encryption_context DataOpentelekomcloudKmsDataKeyV1#encryption_context}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsDataKeyV1.DataOpentelekomcloudKmsDataKeyV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/data-sources/kms_data_key_v1#id DataOpentelekomcloudKmsDataKeyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



