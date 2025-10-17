# `ltsCrossAccountAccessV2` Submodule <a name="`ltsCrossAccountAccessV2` Submodule" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LtsCrossAccountAccessV2 <a name="LtsCrossAccountAccessV2" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2 opentelekomcloud_lts_cross_account_access_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ltscrossaccountaccessv2"

ltscrossaccountaccessv2.NewLtsCrossAccountAccessV2(scope Construct, id *string, config LtsCrossAccountAccessV2Config) LtsCrossAccountAccessV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config">LtsCrossAccountAccessV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config">LtsCrossAccountAccessV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LtsCrossAccountAccessV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ltscrossaccountaccessv2"

ltscrossaccountaccessv2.LtsCrossAccountAccessV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ltscrossaccountaccessv2"

ltscrossaccountaccessv2.LtsCrossAccountAccessV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ltscrossaccountaccessv2"

ltscrossaccountaccessv2.LtsCrossAccountAccessV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ltscrossaccountaccessv2"

ltscrossaccountaccessv2.LtsCrossAccountAccessV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a LtsCrossAccountAccessV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LtsCrossAccountAccessV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LtsCrossAccountAccessV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the LtsCrossAccountAccessV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.accessConfigType">AccessConfigType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyDomainNameInput">AgencyDomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyNameInput">AgencyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyProjectIdInput">AgencyProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupIdInput">LogAgencyGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupNameInput">LogAgencyGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamIdInput">LogAgencyStreamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamNameInput">LogAgencyStreamNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupIdInput">LogGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupNameInput">LogGroupNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamIdInput">LogStreamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamNameInput">LogStreamNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyDomainName">AgencyDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyName">AgencyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyProjectId">AgencyProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupId">LogAgencyGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupName">LogAgencyGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamId">LogAgencyStreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamName">LogAgencyStreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupId">LogGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamId">LogStreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamName">LogStreamName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessConfigType`<sup>Required</sup> <a name="AccessConfigType" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.accessConfigType"></a>

```go
func AccessConfigType() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `AgencyDomainNameInput`<sup>Optional</sup> <a name="AgencyDomainNameInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyDomainNameInput"></a>

```go
func AgencyDomainNameInput() *string
```

- *Type:* *string

---

##### `AgencyNameInput`<sup>Optional</sup> <a name="AgencyNameInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyNameInput"></a>

```go
func AgencyNameInput() *string
```

- *Type:* *string

---

##### `AgencyProjectIdInput`<sup>Optional</sup> <a name="AgencyProjectIdInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyProjectIdInput"></a>

```go
func AgencyProjectIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LogAgencyGroupIdInput`<sup>Optional</sup> <a name="LogAgencyGroupIdInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupIdInput"></a>

```go
func LogAgencyGroupIdInput() *string
```

- *Type:* *string

---

##### `LogAgencyGroupNameInput`<sup>Optional</sup> <a name="LogAgencyGroupNameInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupNameInput"></a>

```go
func LogAgencyGroupNameInput() *string
```

- *Type:* *string

---

##### `LogAgencyStreamIdInput`<sup>Optional</sup> <a name="LogAgencyStreamIdInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamIdInput"></a>

```go
func LogAgencyStreamIdInput() *string
```

- *Type:* *string

---

##### `LogAgencyStreamNameInput`<sup>Optional</sup> <a name="LogAgencyStreamNameInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamNameInput"></a>

```go
func LogAgencyStreamNameInput() *string
```

- *Type:* *string

---

##### `LogGroupIdInput`<sup>Optional</sup> <a name="LogGroupIdInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupIdInput"></a>

```go
func LogGroupIdInput() *string
```

- *Type:* *string

---

##### `LogGroupNameInput`<sup>Optional</sup> <a name="LogGroupNameInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupNameInput"></a>

```go
func LogGroupNameInput() *string
```

- *Type:* *string

---

##### `LogStreamIdInput`<sup>Optional</sup> <a name="LogStreamIdInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamIdInput"></a>

```go
func LogStreamIdInput() *string
```

- *Type:* *string

---

##### `LogStreamNameInput`<sup>Optional</sup> <a name="LogStreamNameInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamNameInput"></a>

```go
func LogStreamNameInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AgencyDomainName`<sup>Required</sup> <a name="AgencyDomainName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyDomainName"></a>

```go
func AgencyDomainName() *string
```

- *Type:* *string

---

##### `AgencyName`<sup>Required</sup> <a name="AgencyName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyName"></a>

```go
func AgencyName() *string
```

- *Type:* *string

---

##### `AgencyProjectId`<sup>Required</sup> <a name="AgencyProjectId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.agencyProjectId"></a>

```go
func AgencyProjectId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LogAgencyGroupId`<sup>Required</sup> <a name="LogAgencyGroupId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupId"></a>

```go
func LogAgencyGroupId() *string
```

- *Type:* *string

---

##### `LogAgencyGroupName`<sup>Required</sup> <a name="LogAgencyGroupName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyGroupName"></a>

```go
func LogAgencyGroupName() *string
```

- *Type:* *string

---

##### `LogAgencyStreamId`<sup>Required</sup> <a name="LogAgencyStreamId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamId"></a>

```go
func LogAgencyStreamId() *string
```

- *Type:* *string

---

##### `LogAgencyStreamName`<sup>Required</sup> <a name="LogAgencyStreamName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logAgencyStreamName"></a>

```go
func LogAgencyStreamName() *string
```

- *Type:* *string

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupId"></a>

```go
func LogGroupId() *string
```

- *Type:* *string

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logGroupName"></a>

```go
func LogGroupName() *string
```

- *Type:* *string

---

##### `LogStreamId`<sup>Required</sup> <a name="LogStreamId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamId"></a>

```go
func LogStreamId() *string
```

- *Type:* *string

---

##### `LogStreamName`<sup>Required</sup> <a name="LogStreamName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.logStreamName"></a>

```go
func LogStreamName() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LtsCrossAccountAccessV2Config <a name="LtsCrossAccountAccessV2Config" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/ltscrossaccountaccessv2"

&ltscrossaccountaccessv2.LtsCrossAccountAccessV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AgencyDomainName: *string,
	AgencyName: *string,
	AgencyProjectId: *string,
	LogAgencyGroupId: *string,
	LogAgencyGroupName: *string,
	LogAgencyStreamId: *string,
	LogAgencyStreamName: *string,
	LogGroupId: *string,
	LogGroupName: *string,
	LogStreamId: *string,
	LogStreamName: *string,
	Name: *string,
	Id: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.agencyDomainName">AgencyDomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#agency_domain_name LtsCrossAccountAccessV2#agency_domain_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.agencyName">AgencyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#agency_name LtsCrossAccountAccessV2#agency_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.agencyProjectId">AgencyProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#agency_project_id LtsCrossAccountAccessV2#agency_project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyGroupId">LogAgencyGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#log_agency_group_id LtsCrossAccountAccessV2#log_agency_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyGroupName">LogAgencyGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#log_agency_group_name LtsCrossAccountAccessV2#log_agency_group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyStreamId">LogAgencyStreamId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#log_agency_stream_id LtsCrossAccountAccessV2#log_agency_stream_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyStreamName">LogAgencyStreamName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#log_agency_stream_name LtsCrossAccountAccessV2#log_agency_stream_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logGroupId">LogGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#log_group_id LtsCrossAccountAccessV2#log_group_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logGroupName">LogGroupName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#log_group_name LtsCrossAccountAccessV2#log_group_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logStreamId">LogStreamId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#log_stream_id LtsCrossAccountAccessV2#log_stream_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logStreamName">LogStreamName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#log_stream_name LtsCrossAccountAccessV2#log_stream_name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#name LtsCrossAccountAccessV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#id LtsCrossAccountAccessV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#tags LtsCrossAccountAccessV2#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgencyDomainName`<sup>Required</sup> <a name="AgencyDomainName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.agencyDomainName"></a>

```go
AgencyDomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#agency_domain_name LtsCrossAccountAccessV2#agency_domain_name}.

---

##### `AgencyName`<sup>Required</sup> <a name="AgencyName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.agencyName"></a>

```go
AgencyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#agency_name LtsCrossAccountAccessV2#agency_name}.

---

##### `AgencyProjectId`<sup>Required</sup> <a name="AgencyProjectId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.agencyProjectId"></a>

```go
AgencyProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#agency_project_id LtsCrossAccountAccessV2#agency_project_id}.

---

##### `LogAgencyGroupId`<sup>Required</sup> <a name="LogAgencyGroupId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyGroupId"></a>

```go
LogAgencyGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#log_agency_group_id LtsCrossAccountAccessV2#log_agency_group_id}.

---

##### `LogAgencyGroupName`<sup>Required</sup> <a name="LogAgencyGroupName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyGroupName"></a>

```go
LogAgencyGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#log_agency_group_name LtsCrossAccountAccessV2#log_agency_group_name}.

---

##### `LogAgencyStreamId`<sup>Required</sup> <a name="LogAgencyStreamId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyStreamId"></a>

```go
LogAgencyStreamId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#log_agency_stream_id LtsCrossAccountAccessV2#log_agency_stream_id}.

---

##### `LogAgencyStreamName`<sup>Required</sup> <a name="LogAgencyStreamName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logAgencyStreamName"></a>

```go
LogAgencyStreamName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#log_agency_stream_name LtsCrossAccountAccessV2#log_agency_stream_name}.

---

##### `LogGroupId`<sup>Required</sup> <a name="LogGroupId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logGroupId"></a>

```go
LogGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#log_group_id LtsCrossAccountAccessV2#log_group_id}.

---

##### `LogGroupName`<sup>Required</sup> <a name="LogGroupName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logGroupName"></a>

```go
LogGroupName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#log_group_name LtsCrossAccountAccessV2#log_group_name}.

---

##### `LogStreamId`<sup>Required</sup> <a name="LogStreamId" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logStreamId"></a>

```go
LogStreamId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#log_stream_id LtsCrossAccountAccessV2#log_stream_id}.

---

##### `LogStreamName`<sup>Required</sup> <a name="LogStreamName" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.logStreamName"></a>

```go
LogStreamName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#log_stream_name LtsCrossAccountAccessV2#log_stream_name}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#name LtsCrossAccountAccessV2#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#id LtsCrossAccountAccessV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opentelekomcloud.ltsCrossAccountAccessV2.LtsCrossAccountAccessV2Config.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.50/docs/resources/lts_cross_account_access_v2#tags LtsCrossAccountAccessV2#tags}.

---



