# `obsBucketObjectAcl` Submodule <a name="`obsBucketObjectAcl` Submodule" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ObsBucketObjectAcl <a name="ObsBucketObjectAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/obs_bucket_object_acl opentelekomcloud_obs_bucket_object_acl}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketobjectacl"

obsbucketobjectacl.NewObsBucketObjectAcl(scope Construct, id *string, config ObsBucketObjectAclConfig) ObsBucketObjectAcl
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig">ObsBucketObjectAclConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig">ObsBucketObjectAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.putAccountPermission">PutAccountPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.putPublicPermission">PutPublicPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetAccountPermission">ResetAccountPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetPublicPermission">ResetPublicPermission</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccountPermission` <a name="PutAccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.putAccountPermission"></a>

```go
func PutAccountPermission(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.putAccountPermission.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPublicPermission` <a name="PutPublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.putPublicPermission"></a>

```go
func PutPublicPermission(value ObsBucketObjectAclPublicPermission)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.putPublicPermission.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a>

---

##### `ResetAccountPermission` <a name="ResetAccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetAccountPermission"></a>

```go
func ResetAccountPermission()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetId"></a>

```go
func ResetId()
```

##### `ResetPublicPermission` <a name="ResetPublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.resetPublicPermission"></a>

```go
func ResetPublicPermission()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ObsBucketObjectAcl resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketobjectacl"

obsbucketobjectacl.ObsBucketObjectAcl_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketobjectacl"

obsbucketobjectacl.ObsBucketObjectAcl_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketobjectacl"

obsbucketobjectacl.ObsBucketObjectAcl_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketobjectacl"

obsbucketobjectacl.ObsBucketObjectAcl_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ObsBucketObjectAcl resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ObsBucketObjectAcl to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ObsBucketObjectAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/obs_bucket_object_acl#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ObsBucketObjectAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.accountPermission">AccountPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList">ObsBucketObjectAclAccountPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.ownerPermission">OwnerPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList">ObsBucketObjectAclOwnerPermissionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.publicPermission">PublicPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference">ObsBucketObjectAclPublicPermissionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.accountPermissionInput">AccountPermissionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.bucketInput">BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.publicPermissionInput">PublicPermissionInput</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.key">Key</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountPermission`<sup>Required</sup> <a name="AccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.accountPermission"></a>

```go
func AccountPermission() ObsBucketObjectAclAccountPermissionList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList">ObsBucketObjectAclAccountPermissionList</a>

---

##### `OwnerPermission`<sup>Required</sup> <a name="OwnerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.ownerPermission"></a>

```go
func OwnerPermission() ObsBucketObjectAclOwnerPermissionList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList">ObsBucketObjectAclOwnerPermissionList</a>

---

##### `PublicPermission`<sup>Required</sup> <a name="PublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.publicPermission"></a>

```go
func PublicPermission() ObsBucketObjectAclPublicPermissionOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference">ObsBucketObjectAclPublicPermissionOutputReference</a>

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `AccountPermissionInput`<sup>Optional</sup> <a name="AccountPermissionInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.accountPermissionInput"></a>

```go
func AccountPermissionInput() interface{}
```

- *Type:* interface{}

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.bucketInput"></a>

```go
func BucketInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `PublicPermissionInput`<sup>Optional</sup> <a name="PublicPermissionInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.publicPermissionInput"></a>

```go
func PublicPermissionInput() ObsBucketObjectAclPublicPermission
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a>

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAcl.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ObsBucketObjectAclAccountPermission <a name="ObsBucketObjectAclAccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketobjectacl"

&obsbucketobjectacl.ObsBucketObjectAclAccountPermission {
	AccountId: *string,
	AccessToAcl: *[]*string,
	AccessToObject: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.property.accountId">AccountId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/obs_bucket_object_acl#account_id ObsBucketObjectAcl#account_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.property.accessToAcl">AccessToAcl</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/obs_bucket_object_acl#access_to_acl ObsBucketObjectAcl#access_to_acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.property.accessToObject">AccessToObject</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/obs_bucket_object_acl#access_to_object ObsBucketObjectAcl#access_to_object}. |

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/obs_bucket_object_acl#account_id ObsBucketObjectAcl#account_id}.

---

##### `AccessToAcl`<sup>Optional</sup> <a name="AccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.property.accessToAcl"></a>

```go
AccessToAcl *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/obs_bucket_object_acl#access_to_acl ObsBucketObjectAcl#access_to_acl}.

---

##### `AccessToObject`<sup>Optional</sup> <a name="AccessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermission.property.accessToObject"></a>

```go
AccessToObject *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/obs_bucket_object_acl#access_to_object ObsBucketObjectAcl#access_to_object}.

---

### ObsBucketObjectAclConfig <a name="ObsBucketObjectAclConfig" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketobjectacl"

&obsbucketobjectacl.ObsBucketObjectAclConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Bucket: *string,
	Key: *string,
	AccountPermission: interface{},
	Id: *string,
	PublicPermission: github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.bucket">Bucket</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/obs_bucket_object_acl#bucket ObsBucketObjectAcl#bucket}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/obs_bucket_object_acl#key ObsBucketObjectAcl#key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.accountPermission">AccountPermission</a></code> | <code>interface{}</code> | account_permission block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/obs_bucket_object_acl#id ObsBucketObjectAcl#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.publicPermission">PublicPermission</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a></code> | public_permission block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.bucket"></a>

```go
Bucket *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/obs_bucket_object_acl#bucket ObsBucketObjectAcl#bucket}.

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/obs_bucket_object_acl#key ObsBucketObjectAcl#key}.

---

##### `AccountPermission`<sup>Optional</sup> <a name="AccountPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.accountPermission"></a>

```go
AccountPermission interface{}
```

- *Type:* interface{}

account_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/obs_bucket_object_acl#account_permission ObsBucketObjectAcl#account_permission}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/obs_bucket_object_acl#id ObsBucketObjectAcl#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PublicPermission`<sup>Optional</sup> <a name="PublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclConfig.property.publicPermission"></a>

```go
PublicPermission ObsBucketObjectAclPublicPermission
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a>

public_permission block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/obs_bucket_object_acl#public_permission ObsBucketObjectAcl#public_permission}

---

### ObsBucketObjectAclOwnerPermission <a name="ObsBucketObjectAclOwnerPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermission.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketobjectacl"

&obsbucketobjectacl.ObsBucketObjectAclOwnerPermission {

}
```


### ObsBucketObjectAclPublicPermission <a name="ObsBucketObjectAclPublicPermission" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketobjectacl"

&obsbucketobjectacl.ObsBucketObjectAclPublicPermission {
	AccessToAcl: *[]*string,
	AccessToObject: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission.property.accessToAcl">AccessToAcl</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/obs_bucket_object_acl#access_to_acl ObsBucketObjectAcl#access_to_acl}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission.property.accessToObject">AccessToObject</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/obs_bucket_object_acl#access_to_object ObsBucketObjectAcl#access_to_object}. |

---

##### `AccessToAcl`<sup>Optional</sup> <a name="AccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission.property.accessToAcl"></a>

```go
AccessToAcl *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/obs_bucket_object_acl#access_to_acl ObsBucketObjectAcl#access_to_acl}.

---

##### `AccessToObject`<sup>Optional</sup> <a name="AccessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission.property.accessToObject"></a>

```go
AccessToObject *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.33/docs/resources/obs_bucket_object_acl#access_to_object ObsBucketObjectAcl#access_to_object}.

---

## Classes <a name="Classes" id="Classes"></a>

### ObsBucketObjectAclAccountPermissionList <a name="ObsBucketObjectAclAccountPermissionList" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketobjectacl"

obsbucketobjectacl.NewObsBucketObjectAclAccountPermissionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObsBucketObjectAclAccountPermissionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.get"></a>

```go
func Get(index *f64) ObsBucketObjectAclAccountPermissionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObsBucketObjectAclAccountPermissionOutputReference <a name="ObsBucketObjectAclAccountPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketobjectacl"

obsbucketobjectacl.NewObsBucketObjectAclAccountPermissionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObsBucketObjectAclAccountPermissionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resetAccessToAcl">ResetAccessToAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resetAccessToObject">ResetAccessToObject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToAcl` <a name="ResetAccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resetAccessToAcl"></a>

```go
func ResetAccessToAcl()
```

##### `ResetAccessToObject` <a name="ResetAccessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.resetAccessToObject"></a>

```go
func ResetAccessToObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToAclInput">AccessToAclInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToObjectInput">AccessToObjectInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToAcl">AccessToAcl</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToObject">AccessToObject</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessToAclInput`<sup>Optional</sup> <a name="AccessToAclInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToAclInput"></a>

```go
func AccessToAclInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccessToObjectInput`<sup>Optional</sup> <a name="AccessToObjectInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToObjectInput"></a>

```go
func AccessToObjectInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AccessToAcl`<sup>Required</sup> <a name="AccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToAcl"></a>

```go
func AccessToAcl() *[]*string
```

- *Type:* *[]*string

---

##### `AccessToObject`<sup>Required</sup> <a name="AccessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accessToObject"></a>

```go
func AccessToObject() *[]*string
```

- *Type:* *[]*string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclAccountPermissionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ObsBucketObjectAclOwnerPermissionList <a name="ObsBucketObjectAclOwnerPermissionList" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketobjectacl"

obsbucketobjectacl.NewObsBucketObjectAclOwnerPermissionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ObsBucketObjectAclOwnerPermissionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.get"></a>

```go
func Get(index *f64) ObsBucketObjectAclOwnerPermissionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ObsBucketObjectAclOwnerPermissionOutputReference <a name="ObsBucketObjectAclOwnerPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketobjectacl"

obsbucketobjectacl.NewObsBucketObjectAclOwnerPermissionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ObsBucketObjectAclOwnerPermissionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.accessToAcl">AccessToAcl</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.accessToObject">AccessToObject</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermission">ObsBucketObjectAclOwnerPermission</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessToAcl`<sup>Required</sup> <a name="AccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.accessToAcl"></a>

```go
func AccessToAcl() *[]*string
```

- *Type:* *[]*string

---

##### `AccessToObject`<sup>Required</sup> <a name="AccessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.accessToObject"></a>

```go
func AccessToObject() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermissionOutputReference.property.internalValue"></a>

```go
func InternalValue() ObsBucketObjectAclOwnerPermission
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclOwnerPermission">ObsBucketObjectAclOwnerPermission</a>

---


### ObsBucketObjectAclPublicPermissionOutputReference <a name="ObsBucketObjectAclPublicPermissionOutputReference" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/obsbucketobjectacl"

obsbucketobjectacl.NewObsBucketObjectAclPublicPermissionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ObsBucketObjectAclPublicPermissionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resetAccessToAcl">ResetAccessToAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resetAccessToObject">ResetAccessToObject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToAcl` <a name="ResetAccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resetAccessToAcl"></a>

```go
func ResetAccessToAcl()
```

##### `ResetAccessToObject` <a name="ResetAccessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.resetAccessToObject"></a>

```go
func ResetAccessToObject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToAclInput">AccessToAclInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToObjectInput">AccessToObjectInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToAcl">AccessToAcl</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToObject">AccessToObject</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessToAclInput`<sup>Optional</sup> <a name="AccessToAclInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToAclInput"></a>

```go
func AccessToAclInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccessToObjectInput`<sup>Optional</sup> <a name="AccessToObjectInput" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToObjectInput"></a>

```go
func AccessToObjectInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccessToAcl`<sup>Required</sup> <a name="AccessToAcl" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToAcl"></a>

```go
func AccessToAcl() *[]*string
```

- *Type:* *[]*string

---

##### `AccessToObject`<sup>Required</sup> <a name="AccessToObject" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.accessToObject"></a>

```go
func AccessToObject() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermissionOutputReference.property.internalValue"></a>

```go
func InternalValue() ObsBucketObjectAclPublicPermission
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.obsBucketObjectAcl.ObsBucketObjectAclPublicPermission">ObsBucketObjectAclPublicPermission</a>

---



