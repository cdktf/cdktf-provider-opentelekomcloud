# `opentelekomcloud_identity_mapping_v3`

Refer to the Terraform Registory for docs: [`opentelekomcloud_identity_mapping_v3`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_mapping_v3).

# `identityMappingV3` Submodule <a name="`identityMappingV3` Submodule" id="@cdktf/provider-opentelekomcloud.identityMappingV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityMappingV3 <a name="IdentityMappingV3" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_mapping_v3 opentelekomcloud_identity_mapping_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.Initializer"></a>

```typescript
import { identityMappingV3 } from '@cdktf/provider-opentelekomcloud'

new identityMappingV3.IdentityMappingV3(scope: Construct, id: string, config: IdentityMappingV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3Config">IdentityMappingV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3Config">IdentityMappingV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityMappingV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.isConstruct"></a>

```typescript
import { identityMappingV3 } from '@cdktf/provider-opentelekomcloud'

identityMappingV3.IdentityMappingV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.isTerraformElement"></a>

```typescript
import { identityMappingV3 } from '@cdktf/provider-opentelekomcloud'

identityMappingV3.IdentityMappingV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.isTerraformResource"></a>

```typescript
import { identityMappingV3 } from '@cdktf/provider-opentelekomcloud'

identityMappingV3.IdentityMappingV3.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.generateConfigForImport"></a>

```typescript
import { identityMappingV3 } from '@cdktf/provider-opentelekomcloud'

identityMappingV3.IdentityMappingV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IdentityMappingV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IdentityMappingV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IdentityMappingV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_mapping_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IdentityMappingV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.links">links</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.mappingIdInput">mappingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.rulesInput">rulesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.mappingId">mappingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.rules">rules</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.links"></a>

```typescript
public readonly links: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `mappingIdInput`<sup>Optional</sup> <a name="mappingIdInput" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.mappingIdInput"></a>

```typescript
public readonly mappingIdInput: string;
```

- *Type:* string

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.rulesInput"></a>

```typescript
public readonly rulesInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mappingId`<sup>Required</sup> <a name="mappingId" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.mappingId"></a>

```typescript
public readonly mappingId: string;
```

- *Type:* string

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.rules"></a>

```typescript
public readonly rules: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityMappingV3Config <a name="IdentityMappingV3Config" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3Config.Initializer"></a>

```typescript
import { identityMappingV3 } from '@cdktf/provider-opentelekomcloud'

const identityMappingV3Config: identityMappingV3.IdentityMappingV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3Config.property.mappingId">mappingId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_mapping_v3#mapping_id IdentityMappingV3#mapping_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3Config.property.rules">rules</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_mapping_v3#rules IdentityMappingV3#rules}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_mapping_v3#id IdentityMappingV3#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `mappingId`<sup>Required</sup> <a name="mappingId" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3Config.property.mappingId"></a>

```typescript
public readonly mappingId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_mapping_v3#mapping_id IdentityMappingV3#mapping_id}.

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3Config.property.rules"></a>

```typescript
public readonly rules: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_mapping_v3#rules IdentityMappingV3#rules}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityMappingV3.IdentityMappingV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.10/docs/resources/identity_mapping_v3#id IdentityMappingV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



