# `fgsAsyncInvokeConfigV2` Submodule <a name="`fgsAsyncInvokeConfigV2` Submodule" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FgsAsyncInvokeConfigV2 <a name="FgsAsyncInvokeConfigV2" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/fgs_async_invoke_config_v2 opentelekomcloud_fgs_async_invoke_config_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer"></a>

```typescript
import { fgsAsyncInvokeConfigV2 } from '@cdktf/provider-opentelekomcloud'

new fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2(scope: Construct, id: string, config: FgsAsyncInvokeConfigV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config">FgsAsyncInvokeConfigV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config">FgsAsyncInvokeConfigV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.putOnFailure">putOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.putOnSuccess">putOnSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetOnFailure">resetOnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetOnSuccess">resetOnSuccess</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOnFailure` <a name="putOnFailure" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.putOnFailure"></a>

```typescript
public putOnFailure(value: FgsAsyncInvokeConfigV2OnFailure): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.putOnFailure.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a>

---

##### `putOnSuccess` <a name="putOnSuccess" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.putOnSuccess"></a>

```typescript
public putOnSuccess(value: FgsAsyncInvokeConfigV2OnSuccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.putOnSuccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOnFailure` <a name="resetOnFailure" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetOnFailure"></a>

```typescript
public resetOnFailure(): void
```

##### `resetOnSuccess` <a name="resetOnSuccess" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.resetOnSuccess"></a>

```typescript
public resetOnSuccess(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FgsAsyncInvokeConfigV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isConstruct"></a>

```typescript
import { fgsAsyncInvokeConfigV2 } from '@cdktf/provider-opentelekomcloud'

fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isTerraformElement"></a>

```typescript
import { fgsAsyncInvokeConfigV2 } from '@cdktf/provider-opentelekomcloud'

fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isTerraformResource"></a>

```typescript
import { fgsAsyncInvokeConfigV2 } from '@cdktf/provider-opentelekomcloud'

fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.generateConfigForImport"></a>

```typescript
import { fgsAsyncInvokeConfigV2 } from '@cdktf/provider-opentelekomcloud'

fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a FgsAsyncInvokeConfigV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FgsAsyncInvokeConfigV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FgsAsyncInvokeConfigV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/fgs_async_invoke_config_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FgsAsyncInvokeConfigV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onFailure">onFailure</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference">FgsAsyncInvokeConfigV2OnFailureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onSuccess">onSuccess</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference">FgsAsyncInvokeConfigV2OnSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.functionUrnInput">functionUrnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncEventAgeInSecondsInput">maxAsyncEventAgeInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncRetryAttemptsInput">maxAsyncRetryAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onFailureInput">onFailureInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onSuccessInput">onSuccessInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.functionUrn">functionUrn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncEventAgeInSeconds">maxAsyncEventAgeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncRetryAttempts">maxAsyncRetryAttempts</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `onFailure`<sup>Required</sup> <a name="onFailure" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onFailure"></a>

```typescript
public readonly onFailure: FgsAsyncInvokeConfigV2OnFailureOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference">FgsAsyncInvokeConfigV2OnFailureOutputReference</a>

---

##### `onSuccess`<sup>Required</sup> <a name="onSuccess" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onSuccess"></a>

```typescript
public readonly onSuccess: FgsAsyncInvokeConfigV2OnSuccessOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference">FgsAsyncInvokeConfigV2OnSuccessOutputReference</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `functionUrnInput`<sup>Optional</sup> <a name="functionUrnInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.functionUrnInput"></a>

```typescript
public readonly functionUrnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxAsyncEventAgeInSecondsInput`<sup>Optional</sup> <a name="maxAsyncEventAgeInSecondsInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncEventAgeInSecondsInput"></a>

```typescript
public readonly maxAsyncEventAgeInSecondsInput: number;
```

- *Type:* number

---

##### `maxAsyncRetryAttemptsInput`<sup>Optional</sup> <a name="maxAsyncRetryAttemptsInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncRetryAttemptsInput"></a>

```typescript
public readonly maxAsyncRetryAttemptsInput: number;
```

- *Type:* number

---

##### `onFailureInput`<sup>Optional</sup> <a name="onFailureInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onFailureInput"></a>

```typescript
public readonly onFailureInput: FgsAsyncInvokeConfigV2OnFailure;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a>

---

##### `onSuccessInput`<sup>Optional</sup> <a name="onSuccessInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.onSuccessInput"></a>

```typescript
public readonly onSuccessInput: FgsAsyncInvokeConfigV2OnSuccess;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a>

---

##### `functionUrn`<sup>Required</sup> <a name="functionUrn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.functionUrn"></a>

```typescript
public readonly functionUrn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxAsyncEventAgeInSeconds`<sup>Required</sup> <a name="maxAsyncEventAgeInSeconds" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncEventAgeInSeconds"></a>

```typescript
public readonly maxAsyncEventAgeInSeconds: number;
```

- *Type:* number

---

##### `maxAsyncRetryAttempts`<sup>Required</sup> <a name="maxAsyncRetryAttempts" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.maxAsyncRetryAttempts"></a>

```typescript
public readonly maxAsyncRetryAttempts: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FgsAsyncInvokeConfigV2Config <a name="FgsAsyncInvokeConfigV2Config" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.Initializer"></a>

```typescript
import { fgsAsyncInvokeConfigV2 } from '@cdktf/provider-opentelekomcloud'

const fgsAsyncInvokeConfigV2Config: fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.functionUrn">functionUrn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/fgs_async_invoke_config_v2#function_urn FgsAsyncInvokeConfigV2#function_urn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.maxAsyncEventAgeInSeconds">maxAsyncEventAgeInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/fgs_async_invoke_config_v2#max_async_event_age_in_seconds FgsAsyncInvokeConfigV2#max_async_event_age_in_seconds}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.maxAsyncRetryAttempts">maxAsyncRetryAttempts</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/fgs_async_invoke_config_v2#max_async_retry_attempts FgsAsyncInvokeConfigV2#max_async_retry_attempts}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/fgs_async_invoke_config_v2#id FgsAsyncInvokeConfigV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.onFailure">onFailure</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a></code> | on_failure block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.onSuccess">onSuccess</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a></code> | on_success block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `functionUrn`<sup>Required</sup> <a name="functionUrn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.functionUrn"></a>

```typescript
public readonly functionUrn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/fgs_async_invoke_config_v2#function_urn FgsAsyncInvokeConfigV2#function_urn}.

---

##### `maxAsyncEventAgeInSeconds`<sup>Required</sup> <a name="maxAsyncEventAgeInSeconds" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.maxAsyncEventAgeInSeconds"></a>

```typescript
public readonly maxAsyncEventAgeInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/fgs_async_invoke_config_v2#max_async_event_age_in_seconds FgsAsyncInvokeConfigV2#max_async_event_age_in_seconds}.

---

##### `maxAsyncRetryAttempts`<sup>Required</sup> <a name="maxAsyncRetryAttempts" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.maxAsyncRetryAttempts"></a>

```typescript
public readonly maxAsyncRetryAttempts: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/fgs_async_invoke_config_v2#max_async_retry_attempts FgsAsyncInvokeConfigV2#max_async_retry_attempts}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/fgs_async_invoke_config_v2#id FgsAsyncInvokeConfigV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `onFailure`<sup>Optional</sup> <a name="onFailure" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.onFailure"></a>

```typescript
public readonly onFailure: FgsAsyncInvokeConfigV2OnFailure;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a>

on_failure block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/fgs_async_invoke_config_v2#on_failure FgsAsyncInvokeConfigV2#on_failure}

---

##### `onSuccess`<sup>Optional</sup> <a name="onSuccess" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2Config.property.onSuccess"></a>

```typescript
public readonly onSuccess: FgsAsyncInvokeConfigV2OnSuccess;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a>

on_success block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/fgs_async_invoke_config_v2#on_success FgsAsyncInvokeConfigV2#on_success}

---

### FgsAsyncInvokeConfigV2OnFailure <a name="FgsAsyncInvokeConfigV2OnFailure" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure.Initializer"></a>

```typescript
import { fgsAsyncInvokeConfigV2 } from '@cdktf/provider-opentelekomcloud'

const fgsAsyncInvokeConfigV2OnFailure: fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/fgs_async_invoke_config_v2#destination FgsAsyncInvokeConfigV2#destination}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure.property.param">param</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/fgs_async_invoke_config_v2#param FgsAsyncInvokeConfigV2#param}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/fgs_async_invoke_config_v2#destination FgsAsyncInvokeConfigV2#destination}.

---

##### `param`<sup>Required</sup> <a name="param" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure.property.param"></a>

```typescript
public readonly param: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/fgs_async_invoke_config_v2#param FgsAsyncInvokeConfigV2#param}.

---

### FgsAsyncInvokeConfigV2OnSuccess <a name="FgsAsyncInvokeConfigV2OnSuccess" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess.Initializer"></a>

```typescript
import { fgsAsyncInvokeConfigV2 } from '@cdktf/provider-opentelekomcloud'

const fgsAsyncInvokeConfigV2OnSuccess: fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/fgs_async_invoke_config_v2#destination FgsAsyncInvokeConfigV2#destination}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess.property.param">param</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/fgs_async_invoke_config_v2#param FgsAsyncInvokeConfigV2#param}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/fgs_async_invoke_config_v2#destination FgsAsyncInvokeConfigV2#destination}.

---

##### `param`<sup>Required</sup> <a name="param" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess.property.param"></a>

```typescript
public readonly param: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.35/docs/resources/fgs_async_invoke_config_v2#param FgsAsyncInvokeConfigV2#param}.

---

## Classes <a name="Classes" id="Classes"></a>

### FgsAsyncInvokeConfigV2OnFailureOutputReference <a name="FgsAsyncInvokeConfigV2OnFailureOutputReference" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.Initializer"></a>

```typescript
import { fgsAsyncInvokeConfigV2 } from '@cdktf/provider-opentelekomcloud'

new fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.paramInput">paramInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.param">param</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `paramInput`<sup>Optional</sup> <a name="paramInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.paramInput"></a>

```typescript
public readonly paramInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `param`<sup>Required</sup> <a name="param" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.param"></a>

```typescript
public readonly param: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FgsAsyncInvokeConfigV2OnFailure;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnFailure">FgsAsyncInvokeConfigV2OnFailure</a>

---


### FgsAsyncInvokeConfigV2OnSuccessOutputReference <a name="FgsAsyncInvokeConfigV2OnSuccessOutputReference" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.Initializer"></a>

```typescript
import { fgsAsyncInvokeConfigV2 } from '@cdktf/provider-opentelekomcloud'

new fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.paramInput">paramInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.param">param</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `paramInput`<sup>Optional</sup> <a name="paramInput" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.paramInput"></a>

```typescript
public readonly paramInput: string;
```

- *Type:* string

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `param`<sup>Required</sup> <a name="param" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.param"></a>

```typescript
public readonly param: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: FgsAsyncInvokeConfigV2OnSuccess;
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.fgsAsyncInvokeConfigV2.FgsAsyncInvokeConfigV2OnSuccess">FgsAsyncInvokeConfigV2OnSuccess</a>

---



