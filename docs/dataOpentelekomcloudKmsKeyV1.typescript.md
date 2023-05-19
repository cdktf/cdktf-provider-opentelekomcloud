# `data_opentelekomcloud_kms_key_v1`

Refer to the Terraform Registory for docs: [`data_opentelekomcloud_kms_key_v1`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/data-sources/kms_key_v1).

# `dataOpentelekomcloudKmsKeyV1` Submodule <a name="`dataOpentelekomcloudKmsKeyV1` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudKmsKeyV1 <a name="DataOpentelekomcloudKmsKeyV1" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/data-sources/kms_key_v1 opentelekomcloud_kms_key_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.Initializer"></a>

```typescript
import { dataOpentelekomcloudKmsKeyV1 } from '@cdktf/provider-opentelekomcloud'

new dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1(scope: Construct, id: string, config?: DataOpentelekomcloudKmsKeyV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config">DataOpentelekomcloudKmsKeyV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config">DataOpentelekomcloudKmsKeyV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetDefaultKeyFlag">resetDefaultKeyFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetDomainId">resetDomainId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetKeyAlias">resetKeyAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetKeyDescription">resetKeyDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetKeyId">resetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetKeyState">resetKeyState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetOrigin">resetOrigin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetRealm">resetRealm</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDefaultKeyFlag` <a name="resetDefaultKeyFlag" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetDefaultKeyFlag"></a>

```typescript
public resetDefaultKeyFlag(): void
```

##### `resetDomainId` <a name="resetDomainId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetDomainId"></a>

```typescript
public resetDomainId(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKeyAlias` <a name="resetKeyAlias" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetKeyAlias"></a>

```typescript
public resetKeyAlias(): void
```

##### `resetKeyDescription` <a name="resetKeyDescription" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetKeyDescription"></a>

```typescript
public resetKeyDescription(): void
```

##### `resetKeyId` <a name="resetKeyId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetKeyId"></a>

```typescript
public resetKeyId(): void
```

##### `resetKeyState` <a name="resetKeyState" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetKeyState"></a>

```typescript
public resetKeyState(): void
```

##### `resetOrigin` <a name="resetOrigin" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetOrigin"></a>

```typescript
public resetOrigin(): void
```

##### `resetRealm` <a name="resetRealm" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.resetRealm"></a>

```typescript
public resetRealm(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.isConstruct"></a>

```typescript
import { dataOpentelekomcloudKmsKeyV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.isTerraformElement"></a>

```typescript
import { dataOpentelekomcloudKmsKeyV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.isTerraformDataSource"></a>

```typescript
import { dataOpentelekomcloudKmsKeyV1 } from '@cdktf/provider-opentelekomcloud'

dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.creationDate">creationDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.expirationTime">expirationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.scheduledDeletionDate">scheduledDeletionDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.defaultKeyFlagInput">defaultKeyFlagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.domainIdInput">domainIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyAliasInput">keyAliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyDescriptionInput">keyDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyStateInput">keyStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.originInput">originInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.realmInput">realmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.defaultKeyFlag">defaultKeyFlag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.domainId">domainId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyAlias">keyAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyDescription">keyDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyState">keyState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.origin">origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.realm">realm</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `creationDate`<sup>Required</sup> <a name="creationDate" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.creationDate"></a>

```typescript
public readonly creationDate: string;
```

- *Type:* string

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.expirationTime"></a>

```typescript
public readonly expirationTime: string;
```

- *Type:* string

---

##### `scheduledDeletionDate`<sup>Required</sup> <a name="scheduledDeletionDate" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.scheduledDeletionDate"></a>

```typescript
public readonly scheduledDeletionDate: string;
```

- *Type:* string

---

##### `defaultKeyFlagInput`<sup>Optional</sup> <a name="defaultKeyFlagInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.defaultKeyFlagInput"></a>

```typescript
public readonly defaultKeyFlagInput: string;
```

- *Type:* string

---

##### `domainIdInput`<sup>Optional</sup> <a name="domainIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.domainIdInput"></a>

```typescript
public readonly domainIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyAliasInput`<sup>Optional</sup> <a name="keyAliasInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyAliasInput"></a>

```typescript
public readonly keyAliasInput: string;
```

- *Type:* string

---

##### `keyDescriptionInput`<sup>Optional</sup> <a name="keyDescriptionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyDescriptionInput"></a>

```typescript
public readonly keyDescriptionInput: string;
```

- *Type:* string

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `keyStateInput`<sup>Optional</sup> <a name="keyStateInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyStateInput"></a>

```typescript
public readonly keyStateInput: string;
```

- *Type:* string

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.originInput"></a>

```typescript
public readonly originInput: string;
```

- *Type:* string

---

##### `realmInput`<sup>Optional</sup> <a name="realmInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.realmInput"></a>

```typescript
public readonly realmInput: string;
```

- *Type:* string

---

##### `defaultKeyFlag`<sup>Required</sup> <a name="defaultKeyFlag" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.defaultKeyFlag"></a>

```typescript
public readonly defaultKeyFlag: string;
```

- *Type:* string

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `keyAlias`<sup>Required</sup> <a name="keyAlias" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyAlias"></a>

```typescript
public readonly keyAlias: string;
```

- *Type:* string

---

##### `keyDescription`<sup>Required</sup> <a name="keyDescription" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyDescription"></a>

```typescript
public readonly keyDescription: string;
```

- *Type:* string

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `keyState`<sup>Required</sup> <a name="keyState" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.keyState"></a>

```typescript
public readonly keyState: string;
```

- *Type:* string

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

---

##### `realm`<sup>Required</sup> <a name="realm" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.realm"></a>

```typescript
public readonly realm: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudKmsKeyV1Config <a name="DataOpentelekomcloudKmsKeyV1Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.Initializer"></a>

```typescript
import { dataOpentelekomcloudKmsKeyV1 } from '@cdktf/provider-opentelekomcloud'

const dataOpentelekomcloudKmsKeyV1Config: dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.defaultKeyFlag">defaultKeyFlag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/data-sources/kms_key_v1#default_key_flag DataOpentelekomcloudKmsKeyV1#default_key_flag}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.domainId">domainId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/data-sources/kms_key_v1#domain_id DataOpentelekomcloudKmsKeyV1#domain_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/data-sources/kms_key_v1#id DataOpentelekomcloudKmsKeyV1#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.keyAlias">keyAlias</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/data-sources/kms_key_v1#key_alias DataOpentelekomcloudKmsKeyV1#key_alias}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.keyDescription">keyDescription</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/data-sources/kms_key_v1#key_description DataOpentelekomcloudKmsKeyV1#key_description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.keyId">keyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/data-sources/kms_key_v1#key_id DataOpentelekomcloudKmsKeyV1#key_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.keyState">keyState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/data-sources/kms_key_v1#key_state DataOpentelekomcloudKmsKeyV1#key_state}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.origin">origin</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/data-sources/kms_key_v1#origin DataOpentelekomcloudKmsKeyV1#origin}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.realm">realm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/data-sources/kms_key_v1#realm DataOpentelekomcloudKmsKeyV1#realm}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultKeyFlag`<sup>Optional</sup> <a name="defaultKeyFlag" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.defaultKeyFlag"></a>

```typescript
public readonly defaultKeyFlag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/data-sources/kms_key_v1#default_key_flag DataOpentelekomcloudKmsKeyV1#default_key_flag}.

---

##### `domainId`<sup>Optional</sup> <a name="domainId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.domainId"></a>

```typescript
public readonly domainId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/data-sources/kms_key_v1#domain_id DataOpentelekomcloudKmsKeyV1#domain_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/data-sources/kms_key_v1#id DataOpentelekomcloudKmsKeyV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyAlias`<sup>Optional</sup> <a name="keyAlias" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.keyAlias"></a>

```typescript
public readonly keyAlias: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/data-sources/kms_key_v1#key_alias DataOpentelekomcloudKmsKeyV1#key_alias}.

---

##### `keyDescription`<sup>Optional</sup> <a name="keyDescription" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.keyDescription"></a>

```typescript
public readonly keyDescription: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/data-sources/kms_key_v1#key_description DataOpentelekomcloudKmsKeyV1#key_description}.

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/data-sources/kms_key_v1#key_id DataOpentelekomcloudKmsKeyV1#key_id}.

---

##### `keyState`<sup>Optional</sup> <a name="keyState" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.keyState"></a>

```typescript
public readonly keyState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/data-sources/kms_key_v1#key_state DataOpentelekomcloudKmsKeyV1#key_state}.

---

##### `origin`<sup>Optional</sup> <a name="origin" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/data-sources/kms_key_v1#origin DataOpentelekomcloudKmsKeyV1#origin}.

---

##### `realm`<sup>Optional</sup> <a name="realm" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudKmsKeyV1.DataOpentelekomcloudKmsKeyV1Config.property.realm"></a>

```typescript
public readonly realm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.34.4/docs/data-sources/kms_key_v1#realm DataOpentelekomcloudKmsKeyV1#realm}.

---



