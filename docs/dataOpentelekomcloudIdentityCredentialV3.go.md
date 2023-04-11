# `dataOpentelekomcloudIdentityCredentialV3` Submodule <a name="`dataOpentelekomcloudIdentityCredentialV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudIdentityCredentialV3 <a name="DataOpentelekomcloudIdentityCredentialV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/identity_credential_v3 opentelekomcloud_identity_credential_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudidentitycredentialv3"

dataopentelekomcloudidentitycredentialv3.NewDataOpentelekomcloudIdentityCredentialV3(scope Construct, id *string, config DataOpentelekomcloudIdentityCredentialV3Config) DataOpentelekomcloudIdentityCredentialV3
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3Config">DataOpentelekomcloudIdentityCredentialV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3Config">DataOpentelekomcloudIdentityCredentialV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.resetUserId">ResetUserId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.resetId"></a>

```go
func ResetId()
```

##### `ResetUserId` <a name="ResetUserId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.resetUserId"></a>

```go
func ResetUserId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudidentitycredentialv3"

dataopentelekomcloudidentitycredentialv3.DataOpentelekomcloudIdentityCredentialV3_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudidentitycredentialv3"

dataopentelekomcloudidentitycredentialv3.DataOpentelekomcloudIdentityCredentialV3_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudidentitycredentialv3"

dataopentelekomcloudidentitycredentialv3.DataOpentelekomcloudIdentityCredentialV3_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.credentials">Credentials</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsList">DataOpentelekomcloudIdentityCredentialV3CredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.userIdInput">UserIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.credentials"></a>

```go
func Credentials() DataOpentelekomcloudIdentityCredentialV3CredentialsList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsList">DataOpentelekomcloudIdentityCredentialV3CredentialsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `UserIdInput`<sup>Optional</sup> <a name="UserIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.userIdInput"></a>

```go
func UserIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudIdentityCredentialV3Config <a name="DataOpentelekomcloudIdentityCredentialV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudidentitycredentialv3"

&dataopentelekomcloudidentitycredentialv3.DataOpentelekomcloudIdentityCredentialV3Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	UserId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/identity_credential_v3#id DataOpentelekomcloudIdentityCredentialV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3Config.property.userId">UserId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/identity_credential_v3#user_id DataOpentelekomcloudIdentityCredentialV3#user_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/identity_credential_v3#id DataOpentelekomcloudIdentityCredentialV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `UserId`<sup>Optional</sup> <a name="UserId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3Config.property.userId"></a>

```go
UserId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/identity_credential_v3#user_id DataOpentelekomcloudIdentityCredentialV3#user_id}.

---

### DataOpentelekomcloudIdentityCredentialV3Credentials <a name="DataOpentelekomcloudIdentityCredentialV3Credentials" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3Credentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3Credentials.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudidentitycredentialv3"

&dataopentelekomcloudidentitycredentialv3.DataOpentelekomcloudIdentityCredentialV3Credentials {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudIdentityCredentialV3CredentialsList <a name="DataOpentelekomcloudIdentityCredentialV3CredentialsList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudidentitycredentialv3"

dataopentelekomcloudidentitycredentialv3.NewDataOpentelekomcloudIdentityCredentialV3CredentialsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudIdentityCredentialV3CredentialsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference <a name="DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudidentitycredentialv3"

dataopentelekomcloudidentitycredentialv3.NewDataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.property.access">Access</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.property.userId">UserId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3Credentials">DataOpentelekomcloudIdentityCredentialV3Credentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.property.access"></a>

```go
func Access() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.property.userId"></a>

```go
func UserId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3CredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudIdentityCredentialV3Credentials
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudIdentityCredentialV3.DataOpentelekomcloudIdentityCredentialV3Credentials">DataOpentelekomcloudIdentityCredentialV3Credentials</a>

---



