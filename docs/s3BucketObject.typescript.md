# `opentelekomcloud_s3_bucket_object`

Refer to the Terraform Registory for docs: [`opentelekomcloud_s3_bucket_object`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object).

# `s3BucketObject` Submodule <a name="`s3BucketObject` Submodule" id="@cdktf/provider-opentelekomcloud.s3BucketObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3BucketObject <a name="S3BucketObject" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object opentelekomcloud_s3_bucket_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer"></a>

```typescript
import { s3BucketObject } from '@cdktf/provider-opentelekomcloud'

new s3BucketObject.S3BucketObject(scope: Construct, id: string, config: S3BucketObjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig">S3BucketObjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig">S3BucketObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetAcl">resetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetCacheControl">resetCacheControl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetContentDisposition">resetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetContentEncoding">resetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetContentLanguage">resetContentLanguage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetServerSideEncryption">resetServerSideEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetSseKmsKeyId">resetSseKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetWebsiteRedirect">resetWebsiteRedirect</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAcl` <a name="resetAcl" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetAcl"></a>

```typescript
public resetAcl(): void
```

##### `resetCacheControl` <a name="resetCacheControl" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetCacheControl"></a>

```typescript
public resetCacheControl(): void
```

##### `resetContent` <a name="resetContent" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetContentDisposition` <a name="resetContentDisposition" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetContentDisposition"></a>

```typescript
public resetContentDisposition(): void
```

##### `resetContentEncoding` <a name="resetContentEncoding" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetContentEncoding"></a>

```typescript
public resetContentEncoding(): void
```

##### `resetContentLanguage` <a name="resetContentLanguage" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetContentLanguage"></a>

```typescript
public resetContentLanguage(): void
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetEtag` <a name="resetEtag" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetEtag"></a>

```typescript
public resetEtag(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetId"></a>

```typescript
public resetId(): void
```

##### `resetServerSideEncryption` <a name="resetServerSideEncryption" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetServerSideEncryption"></a>

```typescript
public resetServerSideEncryption(): void
```

##### `resetSource` <a name="resetSource" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetSseKmsKeyId` <a name="resetSseKmsKeyId" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetSseKmsKeyId"></a>

```typescript
public resetSseKmsKeyId(): void
```

##### `resetWebsiteRedirect` <a name="resetWebsiteRedirect" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.resetWebsiteRedirect"></a>

```typescript
public resetWebsiteRedirect(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.isConstruct"></a>

```typescript
import { s3BucketObject } from '@cdktf/provider-opentelekomcloud'

s3BucketObject.S3BucketObject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.isTerraformElement"></a>

```typescript
import { s3BucketObject } from '@cdktf/provider-opentelekomcloud'

s3BucketObject.S3BucketObject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.isTerraformResource"></a>

```typescript
import { s3BucketObject } from '@cdktf/provider-opentelekomcloud'

s3BucketObject.S3BucketObject.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.aclInput">aclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.cacheControlInput">cacheControlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentDispositionInput">contentDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentEncodingInput">contentEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentLanguageInput">contentLanguageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.etagInput">etagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.serverSideEncryptionInput">serverSideEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.sseKmsKeyIdInput">sseKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.websiteRedirectInput">websiteRedirectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.acl">acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.cacheControl">cacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentLanguage">contentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.serverSideEncryption">serverSideEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.sseKmsKeyId">sseKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.websiteRedirect">websiteRedirect</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.aclInput"></a>

```typescript
public readonly aclInput: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `cacheControlInput`<sup>Optional</sup> <a name="cacheControlInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.cacheControlInput"></a>

```typescript
public readonly cacheControlInput: string;
```

- *Type:* string

---

##### `contentDispositionInput`<sup>Optional</sup> <a name="contentDispositionInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentDispositionInput"></a>

```typescript
public readonly contentDispositionInput: string;
```

- *Type:* string

---

##### `contentEncodingInput`<sup>Optional</sup> <a name="contentEncodingInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentEncodingInput"></a>

```typescript
public readonly contentEncodingInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentLanguageInput`<sup>Optional</sup> <a name="contentLanguageInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentLanguageInput"></a>

```typescript
public readonly contentLanguageInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.etagInput"></a>

```typescript
public readonly etagInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `serverSideEncryptionInput`<sup>Optional</sup> <a name="serverSideEncryptionInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.serverSideEncryptionInput"></a>

```typescript
public readonly serverSideEncryptionInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `sseKmsKeyIdInput`<sup>Optional</sup> <a name="sseKmsKeyIdInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.sseKmsKeyIdInput"></a>

```typescript
public readonly sseKmsKeyIdInput: string;
```

- *Type:* string

---

##### `websiteRedirectInput`<sup>Optional</sup> <a name="websiteRedirectInput" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.websiteRedirectInput"></a>

```typescript
public readonly websiteRedirectInput: string;
```

- *Type:* string

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `cacheControl`<sup>Required</sup> <a name="cacheControl" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.cacheControl"></a>

```typescript
public readonly cacheControl: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

---

##### `contentLanguage`<sup>Required</sup> <a name="contentLanguage" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentLanguage"></a>

```typescript
public readonly contentLanguage: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `serverSideEncryption`<sup>Required</sup> <a name="serverSideEncryption" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.serverSideEncryption"></a>

```typescript
public readonly serverSideEncryption: string;
```

- *Type:* string

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `sseKmsKeyId`<sup>Required</sup> <a name="sseKmsKeyId" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.sseKmsKeyId"></a>

```typescript
public readonly sseKmsKeyId: string;
```

- *Type:* string

---

##### `websiteRedirect`<sup>Required</sup> <a name="websiteRedirect" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.websiteRedirect"></a>

```typescript
public readonly websiteRedirect: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3BucketObjectConfig <a name="S3BucketObjectConfig" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.Initializer"></a>

```typescript
import { s3BucketObject } from '@cdktf/provider-opentelekomcloud'

const s3BucketObjectConfig: s3BucketObject.S3BucketObjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#bucket S3BucketObject#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#key S3BucketObject#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.acl">acl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#acl S3BucketObject#acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.cacheControl">cacheControl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#cache_control S3BucketObject#cache_control}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.content">content</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#content S3BucketObject#content}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#content_disposition S3BucketObject#content_disposition}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#content_encoding S3BucketObject#content_encoding}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.contentLanguage">contentLanguage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#content_language S3BucketObject#content_language}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.contentType">contentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#content_type S3BucketObject#content_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.etag">etag</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#etag S3BucketObject#etag}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#id S3BucketObject#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.serverSideEncryption">serverSideEncryption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#server_side_encryption S3BucketObject#server_side_encryption}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#source S3BucketObject#source}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.sseKmsKeyId">sseKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#sse_kms_key_id S3BucketObject#sse_kms_key_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.websiteRedirect">websiteRedirect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#website_redirect S3BucketObject#website_redirect}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#bucket S3BucketObject#bucket}.

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#key S3BucketObject#key}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#acl S3BucketObject#acl}.

---

##### `cacheControl`<sup>Optional</sup> <a name="cacheControl" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.cacheControl"></a>

```typescript
public readonly cacheControl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#cache_control S3BucketObject#cache_control}.

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#content S3BucketObject#content}.

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#content_disposition S3BucketObject#content_disposition}.

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#content_encoding S3BucketObject#content_encoding}.

---

##### `contentLanguage`<sup>Optional</sup> <a name="contentLanguage" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.contentLanguage"></a>

```typescript
public readonly contentLanguage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#content_language S3BucketObject#content_language}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#content_type S3BucketObject#content_type}.

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#etag S3BucketObject#etag}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#id S3BucketObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `serverSideEncryption`<sup>Optional</sup> <a name="serverSideEncryption" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.serverSideEncryption"></a>

```typescript
public readonly serverSideEncryption: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#server_side_encryption S3BucketObject#server_side_encryption}.

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#source S3BucketObject#source}.

---

##### `sseKmsKeyId`<sup>Optional</sup> <a name="sseKmsKeyId" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.sseKmsKeyId"></a>

```typescript
public readonly sseKmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#sse_kms_key_id S3BucketObject#sse_kms_key_id}.

---

##### `websiteRedirect`<sup>Optional</sup> <a name="websiteRedirect" id="@cdktf/provider-opentelekomcloud.s3BucketObject.S3BucketObjectConfig.property.websiteRedirect"></a>

```typescript
public readonly websiteRedirect: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.5/docs/resources/s3_bucket_object#website_redirect S3BucketObject#website_redirect}.

---



